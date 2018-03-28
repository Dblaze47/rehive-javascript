# Rehive Javascript SDK

### About

This is the Javascript SDK for the Rehive API.

## Installation

via NPM:

`npm install rehive`

via CDN:

`https://cdn.jsdelivr.net/npm/rehive@{version_number}/build/rehive.min.js`

or use the minified file in the `build` folder

## Getting started

### Client Side 

Initialize the SDK with: 

`window.rehive = new Rehive(config);` (NodeJS)

or 

`rehive = new Rehive(config);`

Your `config` object should contain:

* `storageMethod` - Options are `session` for `sessionStorage` and `local` for `localStorage`

* `apiVersion` - Default is `3` (Version 3 is the only currently supported version)

* `apiToken` - Your Rehive API token

Example:

```
	var config = {
		apiVersion: 3, 
		storageMethod: "local",
		apiToken: "authenticationTokenHere"
	}

```

### Server Side (NodeJS)

Initialize the sdk with: 
`const rehive = new Rehive(config);`

Your `config` object should contain:

* `apiVersion` - Default is `3` (Version 3 is the only currently supported version)

* `apiToken` - Your Rehive API token

Example:

```
	var config = {
		apiVersion: 3, 
		apiToken: "authenticationTokenHere"
	}

```


### Documentation and usage

For more detailed documentation and usage [Docs](https://docs.rehive.com/).

License
-------------
<a href=/LICENSE target="_blank">MIT</a> license.
