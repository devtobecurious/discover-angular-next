var express = require('express');
var router = express.Router();
const webpush = require('web-push');

const vapidKeys = {
    "publicKey": "BEfaBUPsLxyR0_UbcSCmlTV7ibMf7smzfXNY4dqI8DJUdRYNuuWK2T_rEsGiUe0WZXia1SJhyhOwV02JRYE9zLM",
    "privateKey": "33ulYmQB2uVAV3RChJjyCI-JALWjIIGjtPKKBN5vG_s"
};

webpush.setVapidDetails(
    'mailto:evan@boissonnot.fr',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

/* GET users listing. */

 const sendAllNotifications = (req, res, next) => {
    const notificationPayload = {
        "notification": {
            "title": "Angular News",
            "body": "Newsletter Available!",
            "icon": "assets/main-page-logo-small-hat.png",
            "vibrate": [100, 50, 100],
            "data": {
                "dateOfArrival": Date.now(),
                "primaryKey": 1
            },
            "actions": [{
                "action": "explore",
                "title": "Go to the site"
            }]
        }
    };

    webpush.sendNotification(sub, JSON.stringify(notificationPayload))
        .then(() => res.status(200).json({message: 'Newsletter sent successfully.'}))
        .catch(err => {
            console.error("Error sending notification, reason: ", err);
            res.sendStatus(500);
        });
};

router.get('/', sendAllNotifications);

module.exports = router;
