import * as React from 'react';
import './Hello.scss'

interface IProps {
    compiler: string,
    framework: string,
    bundler: string
}

export class Hello extends React.Component<IProps, {}> {
    render() {
        return <h1>This is a <area shape="" coords="" href="" alt=""/> {this.props.framework} application using {this.props.compiler} with {this.props.bundler}</h1>
    }
}