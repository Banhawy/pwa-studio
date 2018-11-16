import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import actions, { continueShopping } from 'src/actions/checkoutReceipt';
import Receipt from './receipt';
import { getOrderInformation } from 'src/selectors/checkoutReceipt';

const { reset } = actions;

export default compose(
    connect(
        state => ({ order: getOrderInformation(state) }),
        // TODO: add create account handler
        { continueShopping, reset }
    ),
    withRouter
)(Receipt);
