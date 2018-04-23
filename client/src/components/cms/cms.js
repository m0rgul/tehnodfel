import React, {Component} from 'react';
import Loader from '../Loader';

class CMS extends Component {
  componentWillMount() {
    this.props.fetchWebsiteData();
  }

  render() {
    const {loading, error, data} = this.props.website;

    if (data) {
      return (<div className='cms container-fluid'>
        <div className="row">
          <h2 className='dashTitle'>Content Management System</h2>
          <form className="form-horizontal">
            {/* Intro forms */}
            <h4>Intro Section</h4>
            <div class="form-group">
              <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
              </div>
            </div>
          </form>
        </div>
      </div>);
    } else {
      if (loading) {
        return <Loader/>;
      }
      if (error) {
        return (<div>Error</div>);
      }
      return null;
    }
  }
};

export default CMS;
