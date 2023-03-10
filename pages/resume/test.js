import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyComponent({ slug }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.location.href = url;
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  function handleClick() {
    router.push(`/my-page/${newSlug}`);
  }

  return (
    <div>
      <p>The current slug is: {slug}</p>
      <button onClick={handleClick}>Load new slug</button>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'hello' } },
      { params: { slug: 'world' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  return { props: { slug } };
}

export default MyComponent;
