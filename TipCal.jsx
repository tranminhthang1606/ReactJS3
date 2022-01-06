const app = document.getElementById("app");

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onTextChange(event.target.value);
  }

  render() {
    const { label, prefix } = this.props;
    const type = this.props.input.type;
    const placeholder = this.props.input.placeholder;

    return (
      <div>
        <p>{label}</p>
        {type === "bill" ? (
          <div>
            <span>{prefix}</span>
            <input
              style={{ width: "100%", margin: "10px 0", height: "50px" }}
              input={this.type}
              placeholder={placeholder}
              onChange={this.handleChange}
            />
          </div>
        ) : (
          <input
            style={{ width: "100%", height: "50px", margin: "10px 0" }}
            input={this.type}
            placeholder={placeholder}
            onChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}


class SelectorInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSelectorChange(event.target.value);
  }

  render() {
    return (
      <div style={{textAlign:"center",margin:"20px 0"}}>
        <select onChange={this.handleChange}>
          <option disabled selected value="">
            -- Choose an Option --
          </option>
          <option value="0.3">30% Amazing</option>
          <option value="0.2">20% Good</option>
          <option value="0.15">15% OK</option>
          <option value="0.1">10% Bad</option>
        </select>
      </div>
    );
  }
}

class TipResult extends React.Component {
  render() {
    const { tipResultDisplay, tipAmount } = this.props;

    return (
      <div className="tipResults" style={{ display: tipResultDisplay }}>
        <p>Total Tip:</p>
        <div>
          <sup>$</sup>
          <span>{tipAmount}</span>
        </div>
      </div>
    );
  }
}


function Header(props) {
  return (
    <div style={{textAlign:"center"}}>
      <h1>{props.title}</h1>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bill: "",
      service: "",
      people: "",
      tipAmount: "",
      tipResultDisplay: "none",
      calculatePressed: false,
    };

    this.handleBillChange = this.handleBillChange.bind(this);
    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handlePeopleChange = this.handlePeopleChange.bind(this);
    this.handleCalculateTip = this.handleCalculateTip.bind(this);
  }

  handleBillChange(event) {
    this.setState({ bill: event });
  }

  handleServiceChange(event) {
    this.setState({ service: event });
  }

  handlePeopleChange(event) {
    this.setState({ people: event });
  }

  handleCalculateTip() {
    if (
      !isNaN(this.state.bill) &&
      !isNaN(this.state.service) &&
      !isNaN(this.state.people)
    ) {
      if (this.state.bill > 0) {
        if (this.state.service > 0) {
          if (this.state.people > 0) {
            var tipAmount =
              (this.state.bill * this.state.service) / this.state.people;
            tipAmount = Math.round(tipAmount * 100) / 100;
            tipAmount = tipAmount.toFixed(2);

            this.setState({
              calculatePressed: true,
              tipResultDisplay: "block",
              tipAmount: tipAmount,
            });
          }
        }
      }
    }
  }

  render() {
    return (
      <div className="content">
        <Header title="Tip Calculator" />
        <TextInput
          label="Bill amount"
          input={{
            placeholder: "Bill Amount",
            type: "bill",
          }}
          onTextChange={this.handleBillChange}
          
        />

        <TextInput
          label="Number of Guest"
          input={{
            placeholder: "Number of guest",
            type: "people",
          }}
          onTextChange={this.handlePeopleChange}
        />
        <SelectorInput
          input={{
            placeholder: "-- Choose an Option --",
            type: "service",
          }}
          onSelectorChange={this.handleServiceChange}
        />

        <button style={{padding:"10px 30px",backgroundColor:"red",color:"white"}} onClick={this.handleCalculateTip}>Calculate!</button>
        <TipResult
          tipAmount={this.state.tipAmount}
          tipResultDisplay={this.state.tipResultDisplay}
        />
      </div>
    );
  }
}


ReactDOM.render(<App />, app)



const game = document.getElementById("game");
const Increase = () => {};

class Number extends React.Component {

    state = {
        value : 0
    };

    decrease = () => {
        this.setState({ value: this.state.value - 1 });
    }

    increase = () => {
        this.setState({ value: this.state.value + 1 });
    }

    reset = () => {
        this.setState({ value: 0 });
    }


  render() {
    return (
      <div style={{margin:"100px 0",backgroundColor:"salmon",padding:"10px",maxWidth:"500px"}}>
        <div>
          <h1>Counter</h1>
        </div>

            <div>
                <h1>{this.state.value}</h1>
        </div>

        <div>
          <button  onClick={this.decrease}>Decrease</button>
          <button style={{margin:"0 30px"}} onClick={this.increase}>Increase</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Number/>,game)