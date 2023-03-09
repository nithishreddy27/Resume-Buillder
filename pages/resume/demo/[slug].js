
import React from 'react';

const Page = ({ module }) => {
  const Component = module.default;
  return <Component />;
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const module = await import(`../creative/Dynamic`);
  return {
    props: {
      module,
    },
  };
}

export default Page;