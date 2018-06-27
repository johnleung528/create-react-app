import React, { Component } from 'react';
import './Win.css'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

class Win extends Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false,
      stat: {
        rn: 0,
        mc: 0,
        inv: 0,
        prc: 0,
        hsb: 0,
        ahs: 0
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(event) {
    event.target.select();
  }

  handleChange(event) {
    this.setState({
      stat: {rn: event.target.value}
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({stat: {startFu: 0}});
  }

  handleMinus() {
    let value = this.state.stat.rn;
    value = value > 0 ? --value : value;
    this.setState({stat: {rn: value}});
  }

  handlePlus() {
    let value = this.state.stat.rn;
    value++;
    this.setState({stat: {rn: value}})
  }

  toggleDrawer() {
    this.setState({open: !this.state.open});
  }

  render() {

    return (
        <div className="win">
          <Paper className="win-header">
            <div className="header-box">
              <h3 style={{display: 'inline-block', position: 'relative', width: '50%', marginTop: '0.5em'}}>Hi! John</h3>
              <h3 style={{display: 'inline-block', position: 'relative', width: '50%'}}>Hccccccci!</h3>
            </div>
            <div className="header-box">
              <button
                onClick={this.toggleDrawer}
                style={{display: 'block', position: 'relative', float: 'left', boxSizing: 'border-box', border: 'none', height: '100%', width: '50%', padding: '0', margin: '0', backgroundColor: 'red'}}
              >
                <MenuIcon
                 style={{display: 'block', position: 'relative', fontSize: '3em', padding: '0', margin: '0', height: '100%'}} />  {this.state.stat.rn}
              </button>

              <Select
                value={this.state.stat.rn}
                onChange={this.handleChange}
                inputProps={{
                   name: 'People Group',
                   id: 'people-group',
                }}
                style={{display: 'inline-block', position: 'relative', width: '50%', height: '90%'}}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>
          </Paper>

          <Drawer open={this.state.open} onClose={this.toggleDrawer}>
            <div
              onClick={this.toggleDrawer}
              onKeyDown={this.toggleDrawer}
            >
              abc
            </div>
          </Drawer>

          <section>
            RN
            <button onClick={this.handleMinus} >minus</button>
            <TextField
              id="number"
              value={this.state.stat.rn}
              onChange={this.handleChange}
              type="number"
              onClick={this.handleClick}
              margin="dense"
            />
            <button onClick={this.handlePlus} >plus</button>

          </section>
        </div>
    );
  }
}

export default Win;
