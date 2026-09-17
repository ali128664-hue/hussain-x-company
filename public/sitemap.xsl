<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - Hussain X Solution</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
            margin: 0;
            padding: 2rem;
            background-color: #f9f9f9;
          }
          a {
            color: #FF6A00;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: #fff;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          }
          h1 {
            color: #111;
            margin-top: 0;
            border-bottom: 2px solid #FF6A00;
            padding-bottom: 10px;
            display: inline-block;
          }
          p.desc {
            color: #666;
            margin-bottom: 1.5rem;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th {
            text-align: left;
            padding: 12px;
            background-color: #f1f5f9;
            color: #334155;
            font-weight: 600;
            border-bottom: 2px solid #e2e8f0;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid #e2e8f0;
            color: #475569;
          }
          tr:hover td {
            background-color: #f8fafc;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>XML Sitemap</h1>
          <p class="desc">
            This is an XML Sitemap, meant for consumption by search engines.
            <br/>
            You can find more information about XML sitemaps on <a href="https://sitemaps.org">sitemaps.org</a>.
          </p>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p>This XML Sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs.</p>
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Priority</th>
                  <th>Change Frequency</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                    <td><xsl:value-of select="sitemap:priority"/></td>
                    <td><xsl:value-of select="sitemap:changefreq"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
