import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const websiteSchema = new Schema({
  intro: {
    img: String,
    welcomeMessage: {
      type: String,
      default: 'Welcome'
    },
    greetingMessage: {
      type: String,
      default: 'Glad to meet you!'
    }
  },

  services: {
    title: {
      type: String,
      default: 'Services'
    },
    message: {
      type: String,
      default: 'Lorem ipsum...'
    },
    services: [
      {
        title: {
          type: String,
          default: 'Service name'
        },
        description: {
          type: String,
          default: 'Service description'
        },
        icon: {
          type: String,
          default: 'fa-plus'
        }
      }
    ]
  },

  about: {
    title: {
      type: String,
      default: 'About us'
    },
    message: {
      type: String,
      default: 'Lorem ipsum...'
    },
    history: [
      {
        image: String,
        date: {
          type: String,
          default: Date.now()
        },
        description: {
          type: String,
          default: 'Event description'
        }
      }
    ]
  },

  team: {
    title: {
      type: String,
      default: 'About us'
    },
    message: {
      type: String,
      default: 'Lorem ipsum...'
    },
    team: [
      {
        name: {
          type: String,
          default: 'Team member'
        },
        title: {
          type: String,
          default: 'Title'
        },
        image: String,
        facebook: String,
        twitter: String,
        linkedin: String
      }
    ]
  },
  socialMedia: {
    facebook: {
      type: String,
      default: 'https://facebook.com'
    },
    twitter: {
      type: String,
      default: 'https://twitter.com'
    },
    linkedin: {
      type: String,
      default: 'https://linkedin.com'
    },
    email: {
      type: String,
      default: 'test@test.com'
    },
    address: {
      type: String,
      default: 'Some Address no. 123A'
    },
    phoneNo: {
      type: String,
      default: '(0) 123 4567'
    }
  }
});

websiteSchema.statics = {
  getSingleton: function(cb) {
    this.findOne().sort({updated: -1}).limit(1).exec(function(error, model) {
      if (error) {
        cb(error, null);
      } else if (model == null) {
        cb(error, new Website());
      } else {
        cb(error, model);
      }
    });
  }
};

const Website = mongoose.model('Website', websiteSchema);

export default Website;
