import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useZCBStateContext } from '../ZCBState';

const useStyles = makeStyles((theme) => ({
  tag: {
    display         : 'inline-block',
    border          : '2px solid',
    borderColor     : '#1a79b982',
    borderRadius    : '4px',
    backgroundColor : '#3f51b52e',
    fontSize        : '14px',
    fontFamily      : 'Courier Prime, monospace',
    paddingLeft     : '8px',
    paddingRight    : '8px',
    height          : '22px'
  },
  filledtag: {
    display         : 'inline-block',
    border          : '2px solid',
    borderColor     : '#1a79b982',
    borderRadius    : '4px',
    fontSize        : '14px',
    fontFamily      : 'Courier Prime, monospace',
    paddingLeft     : '8px',
    paddingRight    : '8px',
    height          : '22px'
  },
  keyword: {
    fontWeight: 'bold'
  }
}));

const ContractPaper = (props) => {
  const classes = useStyles();
  const  { zcbState } = useZCBStateContext();
  const issuer = (zcbState.contractInfo.issuer === '')?'Issuer name':zcbState.contractInfo.issuer;
  const emptyissuer = (zcbState.contractInfo.issuer === '');
  const issueraccount = (zcbState.contractInfo.issueraccount === '')?'Issuer account':zcbState.contractInfo.issueraccount;
  const emptyissueraccount = (zcbState.contractInfo.issueraccount === '');
  const subscriber = (zcbState.contractInfo.subscriber === '')?'Subscriber name':zcbState.contractInfo.subscriber;
  const emptysubscriber = (zcbState.contractInfo.subscriber === '');
  const subscriberaccount = (zcbState.contractInfo.subscriberaccount === '')?'Subscriber account':zcbState.contractInfo.subscriberaccount;
  const emptysubscriberaccount = (zcbState.contractInfo.subscriberaccount === '');
  const facevalue = (zcbState.contractInfo.faceprice === 0)?'Face value':zcbState.contractInfo.faceprice+'ꜩ';
  const emptyfacevalue = (zcbState.contractInfo.faceprice === 0);
  const discount = (zcbState.contractInfo.discount === 0)?'Discount rate':zcbState.contractInfo.discount+'%';
  const emptydiscount = (zcbState.contractInfo.discount === 0);
  const duration = (zcbState.contractInfo.duration === 0)?'Duration':zcbState.contractInfo.duration+' minutes';
  const emptyduration = (zcbState.contractInfo.duration === 0);
  const period = (zcbState.contractInfo.period === 0)?'Payback period':zcbState.contractInfo.period +' minutes';
  const emptyperiod = (zcbState.contractInfo.period === 0);
  return (
    <Paper square style={{ paddingTop: '80px', paddingLeft:'70px', paddingRight: '60px', paddingBottom:'80px' }}>
      <Typography paragraph align='justify'>
        This zero-coupon bond is established between the issuer <div className={(emptyissuer)?classes.tag:classes.filledtag}>{issuer}</div>,
        identified on the Tezos mainnet by account <div className={(emptyissueraccount)?classes.tag:classes.filledtag}>{issueraccount}</div>, and the subscriber <div className={(emptysubscriber)?classes.tag:classes.filledtag}>{subscriber}</div> identified on the Tezos mainnet by account <div className={(emptysubscriberaccount)?classes.tag:classes.filledtag}>{subscriberaccount}</div>.
      </Typography>
      <Typography paragraph align='justify'>
        The issuer and the subscriber agree on the following terms:
      </Typography>
      <Typography paragraph align='justify'>
        The <span className={classes.keyword}>face value</span> of the bond is set to <div className={(emptyfacevalue)?classes.tag:classes.filledtag}>{facevalue}</div>.
      </Typography>
      <Typography paragraph align='justify'>
        The <span className={classes.keyword}>present value</span> of the bond is computed by applying a discount rate of <div className={(emptydiscount)?classes.tag:classes.filledtag}>{discount}</div> to the face value (see annex 1).
      </Typography>
      <Typography paragraph align='justify'>
        The subscriber agrees to pay the issuer the present value of the bond to activate the bond (see annex 2).
      </Typography>
      <Typography paragraph align='justify'>
        The <span className={classes.keyword}>maturity date</span> of this bond is set to <div className={(emptyduration)?classes.tag:classes.filledtag}>{duration}</div> after the validation date.
        At maturity date, the issuer will pay the subscriber the face value of the bond (see annex 3).
      </Typography>
      <Typography paragraph align='justify'>
        The issuer may transfer the bond to a third party, without the need for the subscriber to be notified nor give his authorization (see annex 4).
      </Typography>
      <Typography paragraph align='justify'>
        The issuer agrees to pay the face value to the subscriber within a payback period of <div className={(emptyperiod)?classes.tag:classes.filledtag}>{period}</div>  after the maturity date.
        After that period the subscriber may dispute the bond (see annex 5).
      </Typography>
      <Typography paragraph>
        Signatures:
      </Typography>
    </Paper>);
}

export default ContractPaper;