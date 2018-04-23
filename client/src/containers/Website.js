import { connect } from 'react-redux';
import { fetchWebsiteData, fetchWebsiteDataSuccess, fetchWebsiteDataError } from '../actions/website';
import WebsiteIndex from '../components/website';

import '../style/website.css';

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

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteIndex);
