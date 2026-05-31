// Fix for Chirpy theme search overlay
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResultWrapper = document.getElementById('search-result-wrapper');
    const postList = document.getElementById('post-list');
    const searchTrigger = document.getElementById('search-trigger');
    const searchCancel = document.getElementById('search-cancel');
    const searchElement = document.getElementById('search');

    console.log('Search fix loaded');
    console.log('Elements found:', {
        searchInput: !!searchInput,
        searchResultWrapper: !!searchResultWrapper,
        postList: !!postList
    });

    // Function to show search overlay
    function showSearchOverlay() {
        if (searchResultWrapper) {
            searchResultWrapper.classList.remove('d-none');
        }
        if (postList) {
            postList.style.display = 'none';
        }
        console.log('Search overlay shown');
    }

    // Function to hide search overlay
    function hideSearchOverlay() {
        if (searchResultWrapper) {
            searchResultWrapper.classList.add('d-none');
        }
        if (postList) {
            postList.style.display = '';
        }
        if (searchInput) {
            searchInput.value = '';
        }
        console.log('Search overlay hidden');
    }

    // Show overlay when typing in search input
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            if (e.target.value.length > 0) {
                showSearchOverlay();
            } else {
                hideSearchOverlay();
            }
        });

        searchInput.addEventListener('focus', function() {
            if (searchInput.value.length > 0) {
                showSearchOverlay();
            }
        });
    }

    // Mobile search trigger
    if (searchTrigger && searchElement) {
        searchTrigger.addEventListener('click', function() {
            searchElement.classList.toggle('d-none');
            if (!searchElement.classList.contains('d-none')) {
                searchInput.focus();
            }
        });
    }

    // Cancel button
    if (searchCancel) {
        searchCancel.addEventListener('click', function() {
            hideSearchOverlay();
            if (searchElement) {
                searchElement.classList.add('d-none');
            }
        });
    }

    // Close search on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchResultWrapper && !searchResultWrapper.classList.contains('d-none')) {
            hideSearchOverlay();
        }
    });
});
