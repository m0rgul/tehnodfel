// import React, {Component} from 'react';
import { fetchWebsiteData, fetchWebsiteDataSuccess, fetchWebsiteDataError } from '../../actions/website';
import { connect } from 'react-redux';
import Loader from '../Loader';
import Cms from './cms';

const mapStateToProps = (state) => {
  return { website: state.website.website };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWebsiteData: () => {
      dispatch(fetchWebsiteData()).then((response) => {
        !response.error
          ? dispatch(fetchWebsiteDataSuccess(response.payload.data))
          : dispatch(fetchWebsiteDataError(response.payload.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cms);
