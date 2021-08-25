import {blue, orange} from '@material-ui/core/colors';
import {Crypto} from '../../../../types/models/dashboards/Crypto';

const cryptoData: Crypto = {
  coinGraphData: {
    bitcoin: {
      yearlyData: [
        {month: 'Jan', amount: 6000},
        {month: 'Feb', amount: 4800},
        {month: 'Mar', amount: 6500},
        {month: 'Apr', amount: 6000},
        {month: 'May', amount: 7800},
        {month: 'Jun', amount: 9000},
        {month: 'Jul', amount: 6000},
        {month: 'Aug', amount: 7000},
        {month: 'Sep', amount: 3700},
        {month: 'Oct', amount: 7800},
        {month: 'Nov', amount: 5800},
        {month: 'Dec', amount: 6500},
      ],
      monthlyData: [
        {date: '1', amount: 6000},
        {date: '2', amount: 4800},
        {date: '3', amount: 6500},
        {date: '4', amount: 6000},
        {date: '5', amount: 7800},
        {date: '6', amount: 9000},
        {date: '7', amount: 6000},
        {date: '8', amount: 7000},
        {date: '9', amount: 3700},
        {date: '10', amount: 7800},
        {date: '11', amount: 5800},
        {date: '12', amount: 6500},
        {date: '13', amount: 7200},
        {date: '14', amount: 6500},
        {date: '15', amount: 2344},
        {date: '16', amount: 4243},
        {date: '17', amount: 5343},
        {date: '18', amount: 2435},
        {date: '19', amount: 4322},
        {date: '20', amount: 2545},
        {date: '21', amount: 3234},
        {date: '22', amount: 4233},
        {date: '23', amount: 2444},
        {date: '24', amount: 6543},
        {date: '25', amount: 4223},
        {date: '26', amount: 4323},
        {date: '27', amount: 2345},
        {date: '28', amount: 2345},
        {date: '29', amount: 5676},
        {date: '30', amount: 2345},
      ],
      weeklyData: [
        {day: 'Monday', amount: 6000},
        {day: 'Tuesday', amount: 4800},
        {day: 'Wednesday', amount: 6500},
        {day: 'Thrusday', amount: 6000},
        {day: 'Friday', amount: 7800},
        {day: 'Saturday', amount: 9000},
        {day: 'Sunday', amount: 6000},
      ],
      dailyData: [
        {time: '00:00', amount: 2444},
        {time: '01:00', amount: 6000},
        {time: '02:00', amount: 4800},
        {time: '03:00', amount: 6500},
        {time: '04:00', amount: 6000},
        {time: '05:00', amount: 7800},
        {time: '06:00', amount: 9000},
        {time: '07:00', amount: 6000},
        {time: '08:00', amount: 7000},
        {time: '09:00', amount: 3700},
        {time: '10:00', amount: 7800},
        {time: '11:00', amount: 5800},
        {time: '12:00', amount: 6500},
        {time: '13:00', amount: 7200},
        {time: '14:00', amount: 6500},
        {time: '15:00', amount: 2344},
        {time: '16:00', amount: 4243},
        {time: '17:00', amount: 5343},
        {time: '18:00', amount: 2435},
        {time: '19:00', amount: 4322},
        {time: '20:00', amount: 2545},
        {time: '21:00', amount: 3234},
        {time: '22:00', amount: 4233},
        {time: '23:00', amount: 2444},
      ],
    },
    litecoin: {
      yearlyData: [
        {month: 'Jan', amount: 5600},
        {month: 'Feb', amount: 4400},
        {month: 'Mar', amount: 6000},
        {month: 'Apr', amount: 4500},
        {month: 'May', amount: 7000},
        {month: 'Jun', amount: 6400},
        {month: 'Jul', amount: 8000},
        {month: 'Aug', amount: 6500},
        {month: 'Sep', amount: 7000},
        {month: 'Oct', amount: 5800},
        {month: 'Nov', amount: 6200},
        {month: 'Dec', amount: 5000},
      ],
      monthlyData: [
        {date: '1', amount: 5600},
        {date: '2', amount: 7000},
        {date: '3', amount: 6400},
        {date: '4', amount: 4500},
        {date: '5', amount: 5500},
        {date: '6', amount: 5900},
        {date: '7', amount: 7500},
        {date: '8', amount: 6500},
        {date: '9', amount: 5400},
        {date: '10', amount: 5000},
        {date: '11', amount: 4400},
        {date: '12', amount: 4900},
        {date: '13', amount: 5500},
        {date: '14', amount: 6300},
        {date: '15', amount: 3944},
        {date: '16', amount: 4243},
        {date: '17', amount: 5043},
        {date: '18', amount: 6935},
        {date: '19', amount: 5622},
        {date: '20', amount: 7645},
        {date: '21', amount: 4034},
        {date: '22', amount: 5633},
        {date: '23', amount: 3944},
        {date: '24', amount: 4543},
        {date: '25', amount: 4023},
        {date: '26', amount: 3623},
        {date: '27', amount: 5045},
        {date: '28', amount: 3645},
        {date: '29', amount: 4576},
        {date: '30', amount: 2945},
      ],
      weeklyData: [
        {day: 'Monday', amount: 6500},
        {day: 'Tuesday', amount: 5200},
        {day: 'Wednesday', amount: 7800},
        {day: 'Thrusday', amount: 3900},
        {day: 'Friday', amount: 5200},
        {day: 'Saturday', amount: 2600},
        {day: 'Sunday', amount: 7800},
      ],
      dailyData: [
        {time: '00:00', amount: 4500},
        {time: '01:00', amount: 6000},
        {time: '02:00', amount: 3500},
        {time: '03:00', amount: 4300},
        {time: '04:00', amount: 5500},
        {time: '05:00', amount: 6300},
        {time: '06:00', amount: 7000},
        {time: '07:00', amount: 6000},
        {time: '08:00', amount: 5200},
        {time: '09:00', amount: 3900},
        {time: '10:00', amount: 4600},
        {time: '11:00', amount: 4000},
        {time: '12:00', amount: 4800},
        {time: '13:00', amount: 6400},
        {time: '14:00', amount: 5200},
        {time: '15:00', amount: 3944},
        {time: '16:00', amount: 2543},
        {time: '17:00', amount: 4043},
        {time: '18:00', amount: 4735},
        {time: '19:00', amount: 3822},
        {time: '20:00', amount: 5245},
        {time: '21:00', amount: 6534},
        {time: '22:00', amount: 5533},
        {time: '23:00', amount: 5044},
      ],
    },
    ripple: {
      yearlyData: [
        {month: 'Jan', amount: 7600},
        {month: 'Feb', amount: 6200},
        {month: 'Mar', amount: 6800},
        {month: 'Apr', amount: 5000},
        {month: 'May', amount: 4200},
        {month: 'Jun', amount: 5600},
        {month: 'Jul', amount: 6800},
        {month: 'Aug', amount: 8100},
        {month: 'Sep', amount: 5700},
        {month: 'Oct', amount: 4500},
        {month: 'Nov', amount: 3700},
        {month: 'Dec', amount: 4700},
      ],
      monthlyData: [
        {date: '1', amount: 4300},
        {date: '2', amount: 3600},
        {date: '3', amount: 4500},
        {date: '4', amount: 5200},
        {date: '5', amount: 4800},
        {date: '6', amount: 5600},
        {date: '7', amount: 6700},
        {date: '8', amount: 5400},
        {date: '9', amount: 5000},
        {date: '10', amount: 6300},
        {date: '11', amount: 6700},
        {date: '12', amount: 7800},
        {date: '13', amount: 7300},
        {date: '14', amount: 6200},
        {date: '15', amount: 4644},
        {date: '16', amount: 5043},
        {date: '17', amount: 4243},
        {date: '18', amount: 4635},
        {date: '19', amount: 3222},
        {date: '20', amount: 4145},
        {date: '21', amount: 3734},
        {date: '22', amount: 4233},
        {date: '23', amount: 3144},
        {date: '24', amount: 3543},
        {date: '25', amount: 3023},
        {date: '26', amount: 4023},
        {date: '27', amount: 4245},
        {date: '28', amount: 3145},
        {date: '29', amount: 3576},
        {date: '30', amount: 2345},
      ],
      weeklyData: [
        {day: 'Monday', amount: 3400},
        {day: 'Tuesday', amount: 4800},
        {day: 'Wednesday', amount: 3700},
        {day: 'Thrusday', amount: 5600},
        {day: 'Friday', amount: 5100},
        {day: 'Saturday', amount: 7200},
        {day: 'Sunday', amount: 6300},
      ],
      dailyData: [
        {time: '00:00', amount: 2600},
        {time: '01:00', amount: 3300},
        {time: '02:00', amount: 2800},
        {time: '03:00', amount: 3200},
        {time: '04:00', amount: 4000},
        {time: '05:00', amount: 3400},
        {time: '06:00', amount: 3100},
        {time: '07:00', amount: 4500},
        {time: '08:00', amount: 4900},
        {time: '09:00', amount: 4200},
        {time: '10:00', amount: 5300},
        {time: '11:00', amount: 5900},
        {time: '12:00', amount: 4800},
        {time: '13:00', amount: 6800},
        {time: '14:00', amount: 6100},
        {time: '15:00', amount: 7844},
        {time: '16:00', amount: 7143},
        {time: '17:00', amount: 4043},
        {time: '18:00', amount: 4835},
        {time: '19:00', amount: 4322},
        {time: '20:00', amount: 3645},
        {time: '21:00', amount: 4934},
        {time: '22:00', amount: 5933},
        {time: '23:00', amount: 3944},
      ],
    },
  },
  buySell: {
    buyData: {
      value: '122',
      price: '$7223.9',
      amount: '$87323.8',
    },
    sellData: {
      value: '34',
      price: '$723.9',
      amount: '$7632.8',
    },
  },
  coinsData: {
    bitcoin: {
      price: '7289.75',
      increment: 0.8,
    },
    etherium: {
      price: '170.720',
      increment: 0.76,
    },
    liteCoin: {
      price: '65.1200',
      increment: -0.4,
    },
    ripple: {
      price: '0.2544',
      increment: 0.08,
    },
  },
  marketGraphData: [
    {month: 'Jan', medium: 3000, low: 4000, high: 0, amt: 2400},
    {month: 'Feb', medium: 1000, low: 4000, high: 0, amt: 2210},
    {month: 'Mar', medium: 4000, low: 4000, high: 1200, amt: 2290},
    {month: 'Apr', medium: 3700, low: 4000, high: 0, amt: 2000},
    {month: 'May', medium: 1890, low: 4000, high: 0, amt: 2181},
    {month: 'Jun', medium: 0, low: 1800, high: 0, amt: 2400},
    {month: 'Jul', medium: 0, low: 3500, high: 0, amt: 2400},
    {month: 'Aug', medium: 4000, low: 4000, high: 0, amt: 2400},
  ],
  newsData: [
    {
      id: 1,
      news:
        'Power Ledger’s Jemma Green Is Fighting Climate Change by Helping Trade Neighbors Energy. Binance Coin Spikes Almost 20 Percent as...',
      created: '16 mins',
      image: '/assets/images/bitcoin1.png',
      by: 'BTC EHTD USD',
    },
    {
      id: 2,
      news:
        'Binance Coin Spikes Almost 20 Percent as Bitcoin and Crypto Market Take a Break After Red Wave. Bitcoin with other major coins have dropped...',
      created: '45 mins',
      image: '/assets/images/bitcoin2.png',
      by: 'BTC EHTD USD',
    },
    {
      id: 3,
      news:
        'Power Ledger’s Jemma Green Is Fighting Climate Change by Helping Trade Neighbors Energy. Binance Coin Spikes Almost 20 Percent as...',
      created: '1 Hrs',
      image: '/assets/images/bitcoin3.png',
      by: 'BTC EHTD USD',
    },
  ],
  popularCoins: [
    {
      id: 1,
      name: 'Bitcoin',
      shortName: 'BTC',
      marketCap: '129,820,932',
      volume: '25,111,773',
      h: '2.50',
      image: '/assets/images/bitcoin.png',
      color: orange[600],
    },
    {
      id: 2,
      name: 'Ethereum',
      shortName: 'ETH',
      marketCap: '24,909,820',
      volume: '12,344,434',
      h: '0.45',
      image: '/assets/images/etherium.png',
      color: 'black',
    },
    {
      id: 3,
      name: 'Litecoin',
      shortName: 'LTC',
      marketCap: '137,334,223',
      volume: '43,434,213',
      h: '3.43',
      image: '/assets/images/litcoin.png',
      color: blue[400],
    },
    {
      id: 4,
      name: 'Monero',
      shortName: 'XMR',
      marketCap: '21,445,237',
      volume: '32,324,655',
      h: '0.93',
      image: '/assets/images/bitcoin.png',
      color: orange[500],
    },
    {
      id: 5,
      name: 'Dashcoin',
      shortName: 'DASH',
      marketCap: '124,674,765',
      volume: '94,342,323',
      h: '.30',
      image: '/assets/images/bitcoin.png',
      color: blue[600],
    },
  ],
  totalBalanceData: {
    balance: '33692.00',
    coins: [
      {id: 32423, name: 'Bitcoin', value: 9.654},
      {id: 3333, name: 'Monero', value: 76.184},
      {id: 44334, name: 'Ripple', value: 1567.5},
      {id: 54323, name: 'Litecoin', value: 56.78},
    ],
  },
  btcChartData: [
    {
      id: 1001,
      name: 'GBP',
      value: 3022.9,
      color: '#4299E1',
    },
    {
      id: 1002,
      name: 'USD',
      value: 4508.9,
      color: '#E53E3E',
    },
    {
      id: 1003,
      name: 'CNY',
      value: 2745.9,
      color: '#38B2AC',
    },
    {
      id: 1004,
      name: 'EUR',
      value: 2187.9,
      color: '#4C51BF',
    },
  ],
};
export default cryptoData;
