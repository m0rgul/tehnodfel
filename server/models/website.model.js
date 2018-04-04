import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const websiteSchema = new Schema({
  intro: {
    disabled: {
      type: Boolean,
      default: false
    },
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
    disabled: {
      type: Boolean,
      default: false
    },
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

  portfolio: {
    disabled: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Portfolio'
    },
    message: {
      type: String,
      default: 'Our Portfolio'
    },
    clients: [
      {
        name: {
          type: String,
          default: 'Client'
        },
        description: {
          type: String,
          default: 'Client description'
        },
        image: String
      }
    ]
  },

  about: {
    disabled: {
      type: Boolean,
      default: false
    },
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
        title: {
          type: String,
          default: 'History event'
        },
        message: {
          type: String,
          default: 'Event description'
        }
      }
    ]
  },

  team: {
    disabled: {
      type: Boolean,
      default: false
    },
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

  clients: {
    disabled: {
      type: Boolean,
      default: false
    },
    clients: [
      {
        name: {
          type: String,
          default: 'Client'
        },
        url: String,
        image: String
      }
    ]
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
