import React, { Component } from 'react';
import Artists from './ArtistsComponent';
import Matcher from './MatcherComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Galleries from './GalleriesComponent';
import SingleGallery from './SingleGalleryComponent';
import Shop from './ShopComponent';
import News from './NewsComponent';
import Faq from './FaqComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { FAQ } from '../shared/faq';
import { fetchArtists, fetchGalleries, fetchGalleryImages, fetchPromotions, fetchBillboards, fetchShopping, fetchReviews, fetchNews, postMatchForm, postFeedback, loginUser, logoutUser, createUser } from '../redux/ActionCreators';
import ScrollToTop from './ScrollToTop';

const mapStateToProps = state => {
  return {
      artists: state.artists,
      galleries: state.galleries,
      galleryimages: state.galleryimages,
      matches: state.matches,
      promotions: state.promotions,
      billboards: state.billboards,
      shopping: state.shopping,
      news: state.news,
      reviews: state.reviews,
      auth: state.auth,
      faq: FAQ
  };
};

const mapDispatchToProps = {
  fetchArtists: () => (fetchArtists()),
  fetchGalleries: () => (fetchGalleries()),
  fetchGalleryImages: () => (fetchGalleryImages()),
  fetchPromotions: () => (fetchPromotions()),
  fetchBillboards: () => (fetchBillboards()),
  fetchShopping: () => (fetchShopping()),
  fetchReviews: () => (fetchReviews()),
  fetchNews: () => (fetchNews()),
  postMatchForm: (matchform) => (postMatchForm(matchform)),
  resetMatchForm: () => (actions.reset('matchForm')),
  postFeedback: feedback => (postFeedback(feedback)),
  resetFeedbackForm: () => (actions.reset('feedbackForm')),
  loginUser: creds => (loginUser(creds)),
  logoutUser: () => (logoutUser()),
  createUser: creds => (createUser(creds))
};


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faq: FAQ
    };
  }

  componentDidMount() {
    this.props.fetchArtists();
    this.props.fetchGalleries();
    this.props.fetchGalleryImages();
    this.props.fetchPromotions();
    this.props.fetchBillboards();
    this.props.fetchShopping();
    this.props.fetchReviews();
    this.props.fetchNews();
  }

  render() {

    const HomePage = () => {
      return (
        <Home 
          promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
          billboards={this.props.billboards.billboards}
        />
      );
    }

    const ArtistWithId = ({ match }) => {
      return (
        <SingleGallery 
          artist={this.props.artists.artists.filter(artist => artist._id === 
            match.params.artistId)[0]} 
          galleryimages={this.props.galleryimages.galleryimages} 
        />
      );
    };



    return (
      <div>
        <Header auth={this.props.auth}  
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser}
          createUser={this.props.createUser}
        />
        <ScrollToTop />
        <Switch>
          <Route exact path='/' component={HomePage} />

          <Route exact path='/artists' render={() => <Artists category={"artists"} artists={this.props.artists}  />} />
          
          <Route path='/artists/:artistId' component={ArtistWithId}  />

          <Route path='/matcher' render={() => <Matcher artists={this.state.artists} matches={this.props.matches.matches} postMatchForm={this.props.postMatchForm} resetMatchForm={this.props.resetMatchForm} />} />

          <Route exact path='/gallery' render={() => <Galleries category={"styles"} galleries={this.props.galleries.galleries} galleryimages={this.props.galleryimages.galleryimages} />} />

          <Route exact path='/artistgallery' render={() => <Galleries category={"artists"} galleries={this.props.artists.artists} galleryimages={this.props.galleryimages.galleryimages} />} />

          <Route exact path='/news' render={() => <News newsitems={this.props.news.news}  reviews={this.props.reviews.reviews} promotions={this.props.promotions.promotions} />} />
          <Route exact path='/shop' render={() => <Shop shopitems={this.props.shopping.shopping}  />} />
          <Route exact path='/FAQ' render={() => <Faq faqitems={this.state.faq}  />} />
          <Route exact path='/contact' render={() => <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm} />} />

          <Redirect to='/' /> 
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));