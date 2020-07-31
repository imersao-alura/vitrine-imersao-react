import React, { useState } from 'react';
import propTypes from 'prop-types';

import { PopoverButton, PopoverContent } from './style';

const Popover = ({ children, tags }) => {
  const [open, setOpen] = useState(false);

  return (
    <PopoverButton onClick={() => setOpen(!open)}>
      {children}

      {
        open
        && (
        <PopoverContent>
          {
            tags.map((tag) => (
              <PopoverContent.Tag>
                {tag}
              </PopoverContent.Tag>
            ))
          }
        </PopoverContent>
        )

      }

    </PopoverButton>
  );
};

Popover.defaultProps = {
  tags: [],
};

Popover.propTypes = {
  children: propTypes.node.isRequired,
  tags: propTypes.arrayOf(propTypes.string),
};

export default Popover;
