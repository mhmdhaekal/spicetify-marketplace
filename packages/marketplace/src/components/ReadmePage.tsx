import React from "react";
import { getMarkdownHTML } from "../logic/Utils";
import LoadingIcon from "./Icons/LoadingIcon";

class ReadmePage extends React.Component<
{
  // props
  // TODO: decide what data we want to pass in and how we want to store it
  // (this currently comes from Card.openReadme)
  data: {
    title: string;
    user: string;
    repo: string;
    branch: string;
    readmeURL: string;
    readmeDir: string;
  },
  title: string,
},
{
  // state
  html: string,
}
> {
  state = {
    html: "<p>Loading...</p>",
  };

  getReadmeHTML = async () => {
    return fetch(this.props.data.readmeURL)
      .then((res) => {
        if (!res.ok) throw Spicetify.showNotification(`Error loading README (HTTP ${res.status})`);
        return res.text();
      })
      .then((readmeText) => getMarkdownHTML(readmeText, this.props.data.user, this.props.data.repo))
      .then((html) => {
        if (!html) Spicetify.Platform.History.goBack();
        return html;
      })
      .catch((err) => {
        console.error(err);
        Spicetify.Platform.History.goBack();
        return null;
      });
  };

  componentDidMount() {
    // Get and set readme html once loaded
    this.getReadmeHTML()
      .then((html) => {
        if (html == null) return;
        this.setState({ html });
      });
  }

  componentDidUpdate() {

    // Make the page scrollable
    const main = document.querySelector("#marketplace-readme")?.closest("main");
    if (main) {
      setTimeout(() => {
        // TODO: see if it's possible to use some load event or mutation observer to do this
        main.style.overflowY = "auto";
      }, 1000);
    }

    // Add error handler in attempt to fix broken image urls
    // e.g. "screenshot.png" loads https://xpui.app.spotify.com/screenshot.png and breaks
    // so I turn it into https://raw.githubusercontent.com/theRealPadster/spicetify-hide-podcasts/main/screenshot.png
    // This works for urls relative to the repo root
    document.querySelectorAll("#marketplace-readme img").forEach((img) => {
      img.addEventListener("error", (e) => {
        const element = e.target as HTMLImageElement;
        const originalSrc = element.getAttribute("src");
        const fixedSrc = `https://raw.githubusercontent.com/${this.props.data.user}/${this.props.data.repo}/${this.props.data.branch}/${originalSrc}`;
        element.setAttribute("src", fixedSrc);
      }, { once: true });
    });
  }

  render() {
    return (
      <section className="contentSpacing">
        <div className="marketplace-header" style={ { flexDirection: "row" } }>
          <h1>{this.props.title}</h1>
        </div>
        {this.state.html === "<p>Loading...</p>"
          ? <footer className="marketplace-footer"><LoadingIcon /></footer>
          : <div id="marketplace-readme" className="marketplace-readme__container" dangerouslySetInnerHTML={{ __html: this.state.html }}></div>}
      </section>
    );
  }
}

export default ReadmePage;
