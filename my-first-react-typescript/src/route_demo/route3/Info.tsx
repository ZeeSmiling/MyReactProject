import React from "react";

import {RouteComponentProps} from 'react-router-dom';

interface RouterInfo {
    id: string | undefined
}

interface Props extends RouteComponentProps <RouterInfo>{

}

export default class Info extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
        this.setState({

        })
    }

    render() {
        return (
            <div>
                This is About.
                路由的动态参数是{this.props.match.params.id}.
            </div>
        )
    };
}
