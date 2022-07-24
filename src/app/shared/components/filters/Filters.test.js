class Filters extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name:'',
        alphabet:false,
        number:true,
        type: '',
        ability: '',
        move: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="Filters">
          <div className='d-flex w-100'>
            <div className="input-group flex-grow-1">
              <input
                type="text"
                name="name"
                placeholder="Search for pokemon name"
                className="form-control"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <button type="submit" className="input-group-text">
                <i className="bi bi-search"></i>
              </button>
            </div>
            <button type="button" className="btn btn-light ms-3">
              <i className="bi bi-filter"></i>
              {/*<i className="bi bi-x"></i>*/}
            </button>
          </div>
          <div className="d-flex pt-3 justify-content-between align-items-center">
            <div className='me-4'>
              <input
                type="checkbox"
                className="btn-check"
                name="alphabet"
                id="option1"
                checked={this.state.alphabet}
                onChange={this.handleChange}
              />
              <label className="btn btn-secondary" htmlFor="option1">
                <i className="bi bi-sort-alpha-down"></i>
                {/*<i className="bi bi-sort-alpha-up"></i>*/}
              </label>
            </div>
            <div className='me-4'>
              <input
                type="checkbox"
                className="btn-check"
                name="number"
                id="option2"
                checked={this.state.number}
                onChange={this.handleChange}
              />
              <label className="btn btn-secondary" htmlFor="option2">
                <i className="bi bi-sort-numeric-down"></i>
                {/*<i className="bi bi-sort-numeric-up"></i>*/}
              </label>
            </div>
            <div className='flex-fill pe-4'>
              <select
                name="type"
                className="form-select form-select-sm"
                value={this.state.type}
                onChange={this.handleChange}
              >
                <option defaultValue="">Type</option>
                {this.props.filters.type.map((data, i) => (
                  <option value={data.name} key={i} className="text-capitalize">{data.name}</option>
                ))}
              </select>
            </div>
            <div className='flex-fill pe-4'>
              <select
                name="ability"
                className="form-select form-select-sm"
                value={this.state.ability}
                onChange={this.handleChange}
              >
                <option defaultValue="">Ability</option>
                {this.props.filters.ability.map((data, i) => (
                  <option value={data.name} key={i} className="text-capitalize">{data.name}</option>
                ))}
              </select>
            </div>
            <div className='flex-fill'>
              <select
                name="move"
                className="form-select form-select-sm"
                value={this.state.move}
                onChange={this.handleChange}
              >
                <option defaultValue="">Move</option>
                {this.props.filters.move.map((data, i) => (
                  <option value={data.name} key={i} className="text-capitalize">{data.name}</option>
                ))}
              </select>
            </div>
          </div>
        </form>
      );
    }
  };
  
  export default Filters;