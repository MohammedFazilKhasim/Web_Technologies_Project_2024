import React from 'react';

const Taxonomy = () => {
  return (
    <div>
      <h1>Taxonomy</h1>
      <table>
        <thead>
          <tr>
            <th>Paper Title</th>
            <th>Domain</th>
            <th>Methodology</th>
            <th>Findings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paper 1</td>
            <td>Consumer Networks</td>
            <td>Empirical Study</td>
            <td>Improved Latency</td>
          </tr>
          <tr>
            <td>Paper 2</td>
            <td>Enterprise Security</td>
            <td>Case Study</td>
            <td>Enhanced Security</td>
          </tr>
          <tr>
            <td>Paper 3</td>
            <td>DoH Deployment</td>
            <td>Survey</td>
            <td>Complexity in Configuration</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Taxonomy;
