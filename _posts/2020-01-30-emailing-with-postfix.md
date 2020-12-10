---
layout: single-post
categories: [ web 101 ]
title: "Emailing with Postfix"
subtitle: "Setting up an email server"
date: 2020-01-07
background: 'assets/img/posts/emailing-with-postfix.jpg'

description: Walk through of setting up an email server using Postfix on an Ubuntu 18.

thumbnail: emailing-with-postfix.jpg

nav: 'dark'

func:

syntax_style: "github"

comments: true
---

Setting up an email server is something most developers should do at least once, if not to just understand how valuable and reliable mail services like Google or MailGun are.

Similar to a web server, an email server is a a collection of software that can send and receive requests via the internet. Unlike web servers, which mostly only communicate with an end point browser, email servers have the added complexity of communicating information with other email servers.

So, let's get started with Postfix!

### Pre-installation

Get yourself an Ubuntu 18 installation and setup a sudo enabled user account with ssh access. If you plan to send or receive beyond the localhost of your hosting server, you will need a fully qualified domain name (FQDN), with the nameservers pointing to your host along with an A and MX record.

## 1 Installing Postfix

Postfix is open source so you can use your package manager to install postfix on your server.

```console
sudo apt-get install postfix
```

You should see the Postfix installation wizard.

![Postfix splash screen](/assets/img/posts/emailing-with-postfix/postfix-splash.png)

Once finished, check your installed instance of Postfix is running,

```console
sudo postfix status
```

which should return something like,

```console
postfix/postfix-script: the Postfix mail system is running
```

if for some reason postfix isn't running,

```console
sudo postfix start
```

Install mailutils so you can send and check mail from your terminal.

```console
sudo apt-get install mailutils
```

You may need to update things first with `sudo apt-get update`.

Thats it! Well if you only want to send and receive email @localhost only. Go ahead and test it.

```console
telnet localhost 25
```

returning,

```console
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
220 exampledomain.co.uk ESMTP Postfix (Ubuntu)
```

Now send your first email! To yourself.

```console
ehlo localhost
mail from: root@localhost
rcpt to: madeslowly@localhost
data
Subject: My first email on Postfix

Hi,

Your badass!

Regards,
Admin
```

To send the email,

```console
.
quit
```

Note the period is necessary.

Check your mail!

```console
mail
```

```console
"/var/mail/madeslowly": 1 message 1 new
>N  1 root@localhost  Thu Jan 30 20:39  17/470   My first email on Postfix
?
```

Hit ```1``` and read your email to confirm that you are indeed badass.

OK so we can send an email from our localhost, ... to our localhost. To send and receive mail with the outside world we need to enable IMAP and POP3.

## 2 Sending and receiving to the outside world

Before we start pinging emails left right and centre we need to make some changes to how our emails are stored. Currently, each email in your inbox is stored in a single file in `/var/mail/` and this is not compatible with Courier IMAP/POP3, the software we are going to install to be able to send emails to the outside.

### Instruct Postfix to use [Maildir](https://en.wikipedia.org/wiki/Maildir)

Lets point Postfix to our Maildirs

```console
sudo postconf -e "home_mailbox = Maildir/"
```

and lets make sure [Procmail](https://en.wikipedia.org/wiki/Procmail) isn't lurking around,

```console
sudo postconf -e "mailbox_command = "
```

After restarting Postfix, `sudo  /etc/init.d/postfix restart`, test everything by sending another email as before, then check the contents of your Maildir, `ls -R ~/Maildir`. If everything is OK you should see,

```console
/home/madeslowly/Maildir:
cur  new  tmp

/home/madeslowly/Maildir/cur:

/home/madeslowly/Maildir/new:
1580464528.Vfc01I4247eM227513.postfix-tutorial

/home/madeslowly/Maildir/tmp:
```

You can use your mail client once you have told it where to look with `MAIL=/home/madeslowly/Maildir`. Followed by `mail` should show,

```console
"/home/madeslowly/Maildir": 1 message 1 new
>N  1 root@localhost  17/465   My first email on Postfix
?
```

### Install Courier IMAP and POP3

```console
sudo apt-get install courier-pop
```

```console
sudo apt-get install courier-imap
```
