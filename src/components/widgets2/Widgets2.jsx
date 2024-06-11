import { Button } from "@mui/material"
import "./widgets2.css"

export default function Widgets2() {
    const Button = ({ type }) => {
        return <button className={"widgets2Button " + type}>{type}</button>
    }
    return (
        <div className="widgets2">
            <h3 className="widgets2Title">Latest Transactions</h3>
            <table className="widgets2Table">
                <tr className="widgets2Row">
                    <th className="widgets2Header">Customer</th>
                    <th className="widgets2Header">Date</th>
                    <th className="widgets2Header">Amount</th>
                    <th className="widgets2Header">Status</th>
                </tr>
                <tr className="widgets2Row">
                    <td className="widgets2User">
                        <img src="" alt="" className="widgets2Img" />
                        <span className="widgets2Username">Ankit Patel</span>
                    </td>
                    <td className="widgets2Date">23 Nov 2002</td>
                    <td className="widgets2Amount">₹ 5000</td>
                    <td className="widgets2Status">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgets2Row">
                    <td className="widgets2User">
                        <img src="" alt="" className="widgets2Img" />
                        <span className="widgets2Username">Ankit Patel</span>
                    </td>
                    <td className="widgets2Date">23 Nov 2002</td>
                    <td className="widgets2Amount">₹ 5000</td>
                    <td className="widgets2Status">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgets2Row">
                    <td className="widgets2User">
                        <img src="" alt="" className="widgets2Img" />
                        <span className="widgets2Username">Ankit Patel</span>
                    </td>
                    <td className="widgets2Date">23 Nov 2002</td>
                    <td className="widgets2Amount">₹ 5000</td>
                    <td className="widgets2Status">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgets2Row">
                    <td className="widgets2User">
                        <img src="" alt="" className="widgets2Img" />
                        <span className="widgets2Username">Ankit Patel</span>
                    </td>
                    <td className="widgets2Date">23 Nov 2002</td>
                    <td className="widgets2Amount">₹ 5000</td>
                    <td className="widgets2Status">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgets2Row">
                    <td className="widgets2User">
                        <img src="" alt="" className="widgets2Img" />
                        <span className="widgets2Username">Ankit Patel</span>
                    </td>
                    <td className="widgets2Date">23 Nov 2002</td>
                    <td className="widgets2Amount">₹ 5000</td>
                    <td className="widgets2Status">
                        <Button type="Declined" />
                    </td>
                </tr>
            </table>
        </div>
    )
}
