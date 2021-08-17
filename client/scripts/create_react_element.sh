#!/usr/bin/env bash

if [ -z "$*" ]; then
 echo "put argument with ElementName"
 exit 0

fi

FOLDER="elements"
FILE_NAME=$1
FIRST_CAP="$(tr '[:lower:]' '[:upper:]' <<< ${FOLDER:0:1})${FOLDER:1}"
APPEND=`echo "${FIRST_CAP%?}"`

echo `mkdir src/${FOLDER}/${FILE_NAME}`

# react file
echo `echo "import React from 'react';
import styled from 'styled-components';

interface ${FILE_NAME}Props {

}

const ${FILE_NAME} = ({} : ${FILE_NAME}Props) => {
	return (
    <${FILE_NAME}Container>
      ${FILE_NAME}
    </${FILE_NAME}Container>
  )
};

export default ${FILE_NAME};

const ${FILE_NAME}Container = styled.div\\\`\\\`;
" > src/${FOLDER}/${FILE_NAME}/${FILE_NAME}.tsx`
