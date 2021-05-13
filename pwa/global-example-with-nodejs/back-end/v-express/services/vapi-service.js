const webpush = require('web-push');

class VapiService {
    constructor() {
        this.vapidKeys = {
            "publicKey": "BEfaBUPsLxyR0_UbcSCmlTV7ibMf7smzfXNY4dqI8DJUdRYNuuWK2T_rEsGiUe0WZXia1SJhyhOwV02JRYE9zLM",
            "privateKey": "33ulYmQB2uVAV3RChJjyCI-JALWjIIGjtPKKBN5vG_s"
        };
    }

    init() {
        webpush.setVapidDetails(
            'mailto:evan@boissonnot.fr',
            this.vapidKeys.publicKey,
            this.vapidKeys.privateKey
        );
    }

    send(subscription, title) {
        const payload = JSON.stringify({
            notification: {
              title: title,
              body: 'Know how to send notifications through Angular with this article!',
              icon: 'https://www.shareicon.net/data/256x256/2015/10/02/110808_blog_512x512.png',
              vibrate: [100, 50, 100],
              data: {
                url: 'https://medium.com/@arjenbrandenburgh/angulars-pwa-swpush-and-swupdate-15a7e5c154ac'
              }
            }
          });

        webpush.sendNotification(subscription, payload)
               .catch(err => console.error(err));
    }
}

class SingletonVapiService {
    constructor() {
        if (! SingletonVapiService.instance) {
            SingletonVapiService.instance = new VapiService();
        }
    }

    getInstance() {
        return SingletonVapiService.instance;
    }
}

module.exports = new SingletonVapiService();