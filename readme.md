# Live Results Web (Server/Client)

`<frame>`s belong in the dark and distant past of the internet. So say hello to a modern, responsive, real-time live results service for swimming in the UK.

We aim to initially support SportSystems galas and then will investigate supporting HyTek galas.

This project is currently under development.

## What's different?

The existing SportSystems Live Results Service uses HTML `<frame>` elements and periodic polling to drive live results pages, which have to be FTP'd to a server by the computer running the meet. This is ugly and it's 2020.

A modern, event based solution using JavaScript and web sockets is the future.

## Development

We run on Express. To get started with development,

```bash
git@github.com:Swimming-Club-Data-Systems/Live-Results-Web.git
```

and run

```bash
node start
```

To start the development server.

Development efforts are welcome. Contact us on GitHub or via hello@myswimmingclub.uk if you can help.

## Our future

Once ready, SCDS plan to make this software available for free to everyone. We will provide free hosting for the live results service so that it can be used by as many clubs as possible.

This software will work in conjunction with client software for Windows, MacOS and Linux systems which will send live results to the cloud service.