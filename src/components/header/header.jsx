import logoWhite from "../../assets/images/wD4pmeVzYlTdEAAAAASUVORK5CYII=.png";

const Header = ({count, handleClick}) => {
  return (
    <div className="header-section d-flex align-items-center justify-content-between p-3">
      <div className="navbar gap-4">
        <img className="pointer" src={logoWhite} alt="" />
        <button className="btn-catalog ">
          Catalog
          <i className="fa-solid fa-bars ms-2"></i>
        </button>
        <div className="input-wrapper">
          <input
            className="search-input"
            type="text"
            placeholder="Search product"
          />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <button className="btn btn-danger" onClick={() => handleClick()}>
        Card <span className="badge bg-dark">{count}</span>
      </button>
    </div>
  );
};

export default Header;
