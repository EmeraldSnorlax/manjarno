# manjarno

## Contributing

### Adding new content to the article
Edit [`src/routes/+page.svelte.md`](https://github.com/EmeraldSnorlax/manjarno/blob/main/src/routes/+page.svelte.md) to add new content to the article.

You don't need to know Svelte to do this; the article is written using Markdown. If you can edit your repo's `README.md`, you can edit this article -- no web skills needed :)

### Adding a new event to track
Edit [`src/routes/event.ts`](https://github.com/EmeraldSnorlax/manjarno/blob/main/src/routes/event.ts) to change the event tracked by the stopwatch. The date should be in Unix milis.
To get the timestamp of a Manjaro forum post, open dev tools and inspect the relative timestamp on the post (e.g. 7d). The Unix milis time is there as a data attribute.

#### Running locally?

* `yarn install`

* `yarn dev`

* `yarn build`

---

Things breaking with software is to be expected. However, systematic and repeated failures are things that can and should be avoided. When submitting new content for the article, please keep this in mind.
