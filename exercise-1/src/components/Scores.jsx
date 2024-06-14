
import React from "react";
function Scores({}) {
    return (
        <main className="scores-container">
        <div class="scores">
          <h1>Fake Course</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First name 1</td>
                <td>Last name 1 </td>
                <td>55</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    )
}
export default Scores;