http_path = "/"
css_dir = "../dist/css"
sass_dir = "_sass"
images_dir = "img"
fonts_dir = "fonts"
javascripts_dir = "js"
environment = :development

output_style = (environment == :production) ? :compressed : :expanded

relative_assets = true


# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = true