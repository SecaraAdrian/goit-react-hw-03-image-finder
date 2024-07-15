import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';
import '../index.css';

const API_KEY = '32796055-430da42c5dde817f5aba040d6';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.fetchImages();
    }
  }

  handleFormSubmit = query => {
    this.setState({ searchQuery: query, images: [], page: 1 });
  };

  fetchImages = async () => {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );

      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: largeImageURL || '',
    }));
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} onImageClick={this.toggleModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <Button onClick={this.loadMore} />}
        {showModal && <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
