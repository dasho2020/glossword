### How to update Glossword 1.9? ###

A common way to update:
  1. Export dictionaries into Glossword XML.
  1. Uninstall Glossword component.
  1. Download and install a new Glossword version.
  1. Import data from XML-file.

### How to update Glossword 1.8? ###

_Note:_ Be sure you have a backup copy of your database tables before running update. Follow "System -> System maintenance -> Backup". Complete all steps.

The common way to update Glossword version:

  * Download the latest Glossword package.
  * Extract and overwrite all files except for `db_config.php`.
  * Remove file `/gw_temp/gw_install.lock`.
  * Open in browser `/gw_install/` and follow screen instructions. If your site is `www.domain.tld` and Glossword is installed into root directory then the URL will be `http://www.domain.tld/gw_install/`.
  * Once updated, log in to administrative interface and follow "System -> Maintenance -> Recount the number of terms for each dictionary".

Fail-safe update:
  1. Export dictionaries into XML.
  1. Clean dictionaries.
  1. Update the software.
  1. Import from XML.

If you have made any changes in Glossword, check the following first:
  * file `/custom_vars.php`.
  * files in folder `/templates/common`.
  * HTML-code and settings for visual themes.

: [How to install Glossword?](HowToInstall.md)

: [eng](HowToUpdate.md), [rus](Obnovlenie.md), [spa](ComoActualizar.md)