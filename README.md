# Web Crawler Project

## Description

This project is a robust web crawler designed to discover and store new domains across the internet. It uses a recursive crawling strategy to continuously explore web pages, extract links, and identify new domains not yet in its database.

## Features

- Recursive web crawling
- Domain extraction and storage
- Filtering of blocked websites and words
- Avoidance of known abused websites
- SQLite database integration
- CSV output of crawled URLs

## Prerequisites

- Node.js (version 18 or higher)
- NPM (version 10 or higher)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/webbedpiyush/surpriseMe-be.git
   ```

2. Navigate to the project directory:
   ```
   cd surpriseMe-be
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up the database:
   ```
   node src/createDatabase.js
   ```

## Usage

To start the crawler:

```
node src/crawl.js
```


## Configuration

Edit the `start.json` file to configure:
- Starting URL
- Blocked websites
- Blocked words

## Project Structure

- `src/crawl.js`: Main crawler logic
- `src/createDatabase.js`: Database initialization
- `src/insertUrls.js`: URL insertion utility
- `src/convertUrls.js`: URL conversion utility
- `crawler.db`: SQLite database
- `crawled-urls.csv`: Output file for crawled URLs
- `abusedWebsites.csv`: List of known abused websites

## Flow Explanation

1. **Initialization**: The crawler starts by setting up the database connection and reading configuration.

2. **URL Retrieval**: It retrieves the last 1000 crawled URLs or uses a starting URL.

3. **Crawling**: For each URL:
   - Extracts all links from the page
   - Filters out blocked and invalid links
   - Separates external links
   - Extracts unique domains

4. **Domain Processing**:
   - Checks if domains exist in the database
   - Filters out known abused websites
   - Inserts new domains into the database
   - Appends new domains to a CSV file

5. **Recursion**: After processing 1000 URLs, it restarts the process with newly discovered URLs.

This cycle continues indefinitely, constantly discovering and storing new domains while avoiding unwanted or potentially harmful websites.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.