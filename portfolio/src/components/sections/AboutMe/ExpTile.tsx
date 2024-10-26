import React from "react";
import {Simulate} from "react-dom/test-utils";
import dragOver = Simulate.dragOver;
import moment from "moment";

type ExpTileType = {
    title: string;
    description: string;
    from: Date;
    to: Date;
    position: string;
    points?: string[]
}

const ExpTile: React.FC<ExpTileType> = ({title,description,from,to,position, points}) => {

    const getTimeDiff = () => {

        let diff = Math.ceil(moment(to).diff(moment(from), "year", true));


        return diff === 0 ? "" : diff === 1 ? diff + " rok" : diff > 1 && diff < 5 ? diff + " lata" : diff + " lat";
    }

    return (
        <div className="ExperienceTile">
            <div className="ExperienceTileHeader">
                <h1 className="ExperienceTileTitle">
                    {title}
                </h1>
                <h3 className="ExperienceTileDate">
                    {from.toLocaleDateString()} - {
                    moment(to).isSame(moment(), "date") ? "obecnie" : to.toLocaleDateString()
                }
                    {" "}
                    ({
                        getTimeDiff()
                    })
                </h3>
            </div>
            <div className="ExperienceTileSubHeader">
                <h4>{position}</h4>
            </div>
            <div className="ExperienceTileContent">
                <p>
                    {description}
                </p>

                {
                    points && (
                        <ul>
                            {
                                points.map((p, index)=>
                                    <li key={index}>{p}</li>
                                )
                            }
                        </ul>
                    )
                }

            </div>
        </div>
    )

}

export default ExpTile;