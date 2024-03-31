.search-page {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background: #fff;
    -webkit-transition: all 400ms cubic-bezier(0.32, 1, 0.23, 1);
    transition: all 400ms cubic-bezier(0.32, 1, 0.23, 1);
    -webkit-transform: translate(0, 100%);
    -ms-transform: translate(0, 100%);
    transform: translate(0, 100%);
    opacity: 0;
  }
  .search-page.search-active {
    opacity: 1;
    -webkit-transform: translate(0, 0) scale(1, 1);
    -ms-transform: translate(0, 0) scale(1, 1);
    transform: translate(0, 0) scale(1, 1);
  }
  .search-page.search-active .search-main {
    opacity: 1;
  }
  .search-page .search-main {
    padding-top: 80px;
    height: 100%;
    opacity: 0;
    -webkit-transition: all 400ms cubic-bezier(0.32, 1, 0.23, 1) 250ms;
    transition: all 400ms cubic-bezier(0.32, 1, 0.23, 1) 250ms;
  }
  .search-page .search-main .row,
  .search-page .search-main .row > div {
    height: 100%;
  }
  .search-page .search-icon-close-container {
    position: absolute;
    z-index: 1;
    padding: 16px;
    top: 0;
    right: 2px;
  }
  .search-page .search-icon-close-container i {
    font-size: 20px;
  }
  .search-page #search-input {
    font-family: "Fira Code", Menlo, Monaco, Consolas, "Courier New", monospace;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    width: 100%;
    font-size: 30px;
    font-weight: bold;
    color: #404040;
  }
  @media only screen and (min-width: 768px) {
    .search-page #search-input {
      margin-left: 20px;
    }
  }
  .search-page #search-results {
    overflow: auto;
    height: 100%;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 80px;
  }
  .search-icon a,
  .search-icon-close {
    cursor: pointer;
    font-size: 30px;
    color: #311e3e;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }
  .search-icon a:hover,
  .search-icon-close:hover {
    opacity: 0.8;
  }
  .search-icon,
  .search-icon-close {
    font-size: 16px;
  }