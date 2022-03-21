import React from 'react'

// import './About.css'
import { Table, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';


class About extends React.Component {
  render() {
    return <div>
      <hr />


      <div>
        <Card
        >
          <CardBody>

            <Table bordered>
              <thead>
                <tr>
                  <th>
                    Cover
                  </th>
                  <th>
                    Title
                  </th>
                  <th>
                    Author
                  </th>
                  <th>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th >

                  </th>
                  <td>
                    The Accursed God
                  </td>
                  <td>
                    Vivek
                  </td>
                  <td>
                    deleted details
                  </td>
                </tr>

                <tr>
                  <th >

                  </th>
                  <td>
                    My Experiemnts with Truth
                  </td>
                  <td>
                    Mahatma Gandhi
                  </td>
                  <td>
                    deleted details
                  </td>
                </tr>
                <tr>
                  <th >
                    &nbsp;
                  </th>
                  <td>

                  </td>
                  <td>
                    &nbsp;
                  </td>
                  <td>
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </Table>


          </CardBody>
        </Card>
      </div>

    </div>
  }
}
export default About  