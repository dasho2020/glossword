The list of features:

  * 1.8.x The possibility to sort search results.
  * 1.8.x Provide more information about the users (the last add/edit date, browser/OS, IP).
  * ~~1.8.x Implementation of new interface translation engine.~~
  * ~~1.8.x The possibility to export just one or several custom pages at a time.~~
  * 1.8.x A random term.
  * 1.8.x The possibility to include images in the definition (partially done).
  * 1.8.x The possibility to include audio in the definition (partially done).
  * 1.8.x Support for SMTP.

  * 1.9.x Topics inside dictionaries (also called as "tags", "subdictionaries")
  * 1.9.x Bibliography.
  * 1.9.x RSS capability.
  * 1.9.x Search engine API.
  * 1.9.x Social bookmarking.
  * ~~1.9.x Support for MySQLi.~~

Application design:

  * Create a "normal" HTML-editor.
  * Add RSS for almost any updated data.
  * ~~Remove "Clean cache" from interface. All caching schemes should be transparent.~~
  * ~~Implement the complete [Unicode normalization](http://en.wikipedia.org/wiki/Unicode_normalization) (partially created for 1.9.x, 28.833 transformation rules).~~
  * ~~Replace the text of database queries with dynamically created queries. Use [ActiveRecord](http://en.wikipedia.org/wiki/Active_record_pattern), for example.~~
  * ~~Get rid of XML in stored data. All dictionary entries should be stored as database relations. Better if it would be InnoDB.~~

[Other suggestions are welcome](http://wwwguru.net/glossword/demo/index.php/viewpage/Feedback.xhtml).