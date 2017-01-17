import React, { Component } from "react";
import pic from "./assets/collab.jpg";
import TileCard from "react-tilecard"
import "./assets/index.scss"

export class TC1 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			expanded: false
		}
	}

	onExpandChange() {
		this.setState({
			expanded: !this.state.expanded
		})
	}
	render() {
		return <TileCard name="example"
                   expanded={ this.state.expanded }
                   title="Example"
                   subtitle="a subtitle"
                   cardClassName="my-card"
                   headerClassName="my-header"
                   tileWidth="550px"
                   tileHeight={ `${550*.65}px` }
                   avatarHeight="auto"
                   avatarWidth="120px"
                   onExpandChange={ this.onExpandChange.bind(this) }
                   avatarSrc={ pic }
                   initiallyExpanded={ true }>
           <p>
             But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and
             expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,
             because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there
             anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can
             procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?
             But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant
             pleasure?
             <br/> - de Finibus Bonorum et Malorum, Cicero in 45 BC
           </p>
         </TileCard>
	}
}
