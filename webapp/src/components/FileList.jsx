import React from 'react';
import PropTypes from 'prop-types';

const FileList = ({ files }) => {
  return (
    <ul>
      {files.map((file) => (
        <li key={file.name}>{file.name}</li>
      ))}
    </ul>
  );
};

FileList.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FileList;