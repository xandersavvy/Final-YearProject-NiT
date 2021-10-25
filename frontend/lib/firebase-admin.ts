import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "final-year-nit",
      privateKey:
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCOwF6mUU+U9Rh2\nyZIm61axC5djqkoMjaWoCnUdY76m/oXWdwwSq7QlWC9d1FSiJoZJkyZaZuWb+9bR\njXvOlY3gVxrgB214qxondijvlEVcSA41qTAoiiG25G8zWHA4HAQSt6hJLFRhR0ED\nVQRdga/u4ofwP9E5ruD16OneMqYmYA60FchuZEg+kXjod36dkttdlGRpsedKzkbJ\nbGF4G57rSfjgwZpDGQx0yI9Zlw52KhiSDoGAO2JCnIa/G6K/8yk7CmgaACWfqr2/\nscT2k1/woP/gpF2AAqpthMuvKMGNjij7LXn7XDPpviVZqRYE6kyjpGSGcCPaLkYU\nYb+2Ce33AgMBAAECggEAIgTSCYyjDHqEQ/qxa7j1xedfQo8YanlvGuazFjfo/V72\ngi+InwJwQd4MG644JRRNOEdrAmw3F78iaHnxIUAeuXHIo87hVbpg1zqfcsjA5sb9\nK+iP43lXo4A4x+GxjI2Qou1Fm3qG+U/DvImMKsR3KtStVKHAuKBmV/QTl7I2SjqK\n5WjGcjI6ICE36pliLyG9F5zUWd3qda2r4cDKwzhlopXzsEbYLLCVNOQULmw/92FR\nazZTPnyw/4CwP5/+xjXGcegf1PIMKg/s2h7o8RFJRkNgKUp2GroJ1c7BJleITzrB\nlYoi1VRYoMsIBYawDZ7M7vn7Ckbxv+1nQNJ1cb8woQKBgQDCrJTAY4deOSNMkP0W\n+R3t4HET+1WN6nbI2L+ekGz6iGtfoGtvtiCBNyEbckj2KFMWaJLTa7RdZF0q4Sjn\nTtE+Mb9Gk8oZzBUphPLatEv/VcPSqRAbFjzym4Zi2ap+dT+lRdZwQYQIldWOYgx+\nzb6ln+a9GAsEVHlei4lk53x4mQKBgQC7uIDN5x5on0Hqc5WaBV0XTCENgp22YzET\n7iwdFwi/anL39O1705rrEsDXfTaVV+ITbgkyBGY+qS1uSSTAhRaQh00A/H43KdWF\n5xaXYne56ZCGFH3QLccV8SCvO7LNU7lnzjGgeDGzD+w/fm9sTETBPpIeTAn8oJHO\nv0Tk0Y7lDwKBgDOuy8MT6WFbfAKcz4Rk2MxJdNvgMwN9RtHlsWGwaC5PP2pg1YUP\n7is/7psxySsI454kXy6f/n944L88jbZzF1wSqvxayiH1K30dXbgwe6irJVTtK2h1\ni/LA1Xmy3e+6ww3mr5qX2izJUqv9XeHgT4f7Hq//DRW2M46lLvHJ/yKpAoGBAJJU\ntdtL0XF+y7RGG5Uvnyx9BLryWZyGYAiIPc0DWqdUBIDzZXiEMBwUx0xzZ+ws0KeS\nvApIUaeA21BAJi0I0dkiD024hW7c5nx18i9Z67h5sFZEfPqd5LZe+7p9j9js7fdU\nTW0opJ1PyTqJhbPnFCWLb/28CoDqbh67DKpODNTTAoGBAIhI8+2hIulsTihMz7OB\nRRi50r/vpb/KAnKZZydRiANOC7G8oIURY3+e3eoH/ddqzEfGZSqavUG3fdt9wBcW\na4sL7ZqUsXiek460JJxMcY5FP8+MvDaKMVkPRCb8pJVvmghTdR6ohEy+ZH9gLJVf\n3p1b11Euuhp9UnhmJa9mdcCl\n-----END PRIVATE KEY-----\n",
      clientEmail:
        "firebase-adminsdk-g77js@final-year-nit.iam.gserviceaccount.com",
    }),
    databaseURL: "https://final-year-nit.firebaseio.com",
  });
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };
