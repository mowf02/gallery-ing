class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: 0,
            images: ['https://images.unsplash.com/reserve/unsplash_52cee67a5c618_1.JPG','https://images.unsplash.com/reserve/lNlimzQRqm3emNrRnv1w_IMG_7726.JPG','https://images.unsplash.com/reserve/OnRKhvlFQ2uJNSx5O3cc_DSC00560.jpg']
        };
    }

    onSelect(val) {
        this.setState({selected: val});
    }

    render(){
        return (
            <div>
                <ActiveImage image={this.state.images[this.state.selected]}/>
                <GalleryThumb click={this.onSelect.bind(this)} images={this.state.images}/>
            </div>
        )
    }
}

class ActiveImage extends React.Component {
    render() {
        return (
          <div id="activeImageContainer">
              <img id="activeImage" src={this.props.image} />
          </div>
        )
    }
}

class GalleryThumb extends React.Component {
    render() {
        return(
            <div id="gallery">
                {this.props.images.map(function(image, num) {
                    return <Image key={num} click={this.props.click} val={num} src={image} />
                }.bind(this))}
            </div>
        )
    }
}

class Image extends React.Component {
    render() {
        return(
            <div>
                <li>
                    <img onClick={() => this.props.click(this.props.val)} src={this.props.src} />
                </li>
            </div>
        )
    }
}

ReactDOM.render(
    <Gallery />,
    document.getElementById('container')
);
