import React, {Component} from 'react';
import * as Sentry from '@sentry/browser';


export default class ErrorBoundary extends Component {

     state = {
      hasError: false
    }

   // So if any child component (Settings.js) throws an error componentDidCatch will catch the error and set hasError to true
    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
        Sentry.captureException(error, { extra: errorInfo })
    }


    render() {
        if (this.state.hasError) {
            return <h2>Oh no smth went wrong</h2>
        }
        return this.props.children
    }
}