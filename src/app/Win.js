import React, { Component } from 'react';
import './Win.css'
import Drawer from '@material-ui/core/Drawer';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const getInfo = [
  ['rn', '主動計劃並實踐，向特定對象打開福音話題之人次'],
  ['mc', '隨機佈道打開福音話題之人次'],
  ['inv', '邀請對象接受基督成為救主之人次'],
  ['prc', '接受基督成為救主之人數'],
  ['hsb', '分享被聖靈充滿真理之對象人次'],
  ['ahs', '願意即時禱告被聖靈充滿之人次']
]

class Win extends Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false,
      takeMethod: 'add',
      collect_tab: 'Win',
      week: '2018-06-25',
      peopleGroup: 'local',
      campus: 'Cat',
      stat: [0, 0, 0, 0, 0, 0]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

  }

  handleSelect(event) {
    this.setState({peopleGroup: event.target.value});
  }

  handleClick(event) {
    event.target.select();
  }

  handleChange(event) {
    let arr = this.state.stat;
    let index = event.target.id.toInt();
    arr[index] = event.target.value;
    this.setState({stat: arr});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({stat: {startFu: 0}});
  }

  handleMinus(index) {
    let arr = this.state.stat;
    arr[index] = arr[index] === 0 ? arr[index] : --arr[index];
    this.setState({stat: arr});
  }

  handlePlus(index) {
    let arr = this.state.stat;
    arr[index]++;
    this.setState({stat: arr});
  }

  toggleDrawer() {
    this.setState({open: !this.state.open});
  }

  render() {
    const appList = getInfo.map((app, index) => (
      <tr key={index} className='appList'>
        <td className='appList-td'>
          {app[0].toUpperCase()}
          <br />
          {app[1]}
        </td>
        <td className='appList-td' style={{textAlign: 'center'}}>
          <button onClick={() => {this.handleMinus(index)}} className='ripple app-button'><RemoveIcon /></button>
          <TextField
            id={index.toString()}
            className='statInput'
            value={this.state.stat[index]}
            onChange={this.handleChange}
            type="number"
            onClick={this.handleClick}
            margin="dense"
          />
        <button onClick={() => {this.handlePlus(index)}} className='ripple app-button'><AddIcon /></button>
        </td>
      </tr>
    ));

    return (
        <div className="win">
          <Paper className="win-header">
            <div className="header-box">
              <h3 style={{display: 'inline-block', position: 'relative', width: '50%', marginTop: '0.5em'}}>Hi! John</h3>
              <h3 style={{display: 'inline-block', position: 'relative', width: '50%'}}>{this.state.week}</h3>
            </div>
            <div className="header-box">
              <button
                onClick={this.toggleDrawer}
                style={{display: 'block', position: 'relative', float: 'left', boxSizing: 'border-box', border: 'none', height: '100%', width: '50%', padding: '0', margin: '0', backgroundColor: 'red', textAlign: 'left'}}
                className='ripple drawer-button'
              >
                <MenuIcon
                 style={{display: 'inline-block', position: 'relative', fontSize: '3em', padding: '0', margin: '0', height: '100%', float: 'left'}} />
               <span style={{display: 'inline-block', boxSizing: 'border-box', fontSize: '1.5em', width: 'auto', height: '5vh', textAlign: 'center', lineHeight: '5vh', margin: '0', top: 'auto'}}>{this.state.campus}</span>
              </button>

              <Select
                value={this.state.peopleGroup}
                onChange={this.handleSelect}
                inputProps={{
                   name: 'People Group',
                   id: 'people-group',
                }}
                style={{display: 'inline-block', position: 'relative', width: '50%', height: '90%'}}
              >
                <MenuItem value={'local'}>Local</MenuItem>
                <MenuItem value={'international'}>International</MenuItem>
                <MenuItem value={'bridge'}>Bridge</MenuItem>
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

          <section className='win-section'>
            <table>
              <tbody>
                {appList}
              </tbody>
            </table>
            <button className='submit'>Submit</button>
          </section>
        </div>
    );
  }
}

export default Win;
