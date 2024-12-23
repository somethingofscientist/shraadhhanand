import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './InfiniteScroll.module.css';

export default function InfiniteScroll() {
  const [items, setItems] = useState([]); // Store loaded items
  const [page, setPage] = useState(1); // Track current page
  const [loading, setLoading] = useState(false); // Track loading state
  const [hasMore, setHasMore] = useState(true); // Track if more items are available

  // Function to load more items (simulate an API call)
  const loadMoreItems = () => {
    if (loading || !hasMore) return; // Prevent multiple calls when loading or no more items

    setLoading(true);

    // Simulate loading more items (replace with actual API call)
    setTimeout(() => {
      const newItems = Array.from({ length: 6 }, (_, index) => `Item ${items.length + index + 1}`);
      setItems((prevItems) => [...prevItems, ...newItems]);

      if (newItems.length === 0) {
        setHasMore(false); // No more items to load
      }

      setLoading(false);
    }, 1000);
  };

  // Function to detect scroll position
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 100) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Fetch more items when the page changes
  useEffect(() => {
    loadMoreItems();
  }, [page]);

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Clean up
  }, []);

  return (
    <>
      <div className={styles.container}>
        {items.map((item, index) => (
          <div className={styles.block} key={index}> </div>
        ))}
      </div>

      {/* Show loading message */}
      {loading && <div className={styles.loading}>
        <img src="https://imgs.search.brave.com/tybB1H3L0B2w4iLYLG0Y2fa3EFXrgBj3SjjDAcRNq6U/rs:fit:860:0:0:0/g:ce/aHR0cDovL3N0YXRp/Yy5kZW1pbGtlZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDYvZ2lmLWFu/aW1hdGlvbnMtcmVw/bGFjZS1sb2FkaW5n/LXNjcmVlbi0xMi5n/aWY.gif" alt="" />
      </div>}

      {/* Show a message when no more items are available */}
      {!hasMore && <div>No more items to load</div>}
    </>
  );
}
