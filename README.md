# README

- Perfect_Ruby_on_Railsが4.1推奨でありますが、RoRの最新版は5.2(2018/04/22)なので5.2用書き換えました。
- coffee script部分もjQueryに書き換えてあります。

jquery-ujs.jsの部分がrails5では`form_with`を使わなければならない？と感じました。


## テスト部分 Rspec
- モデルのテストの部分で`validate_presence_of`などが使えない気がするので
rails_helper.rbに以下を記述

```ruby
config.include(Shoulda::Matchers::ActiveModel, type: :model)
config.include(Shoulda::Matchers::ActiveRecord, type: :model)
```

参考
https://github.com/thoughtbot/shoulda-matchers


factory_girl_railsはrails5ではfactory_bot_railsと名前変更がある
以下で置換すると便利（.bakのバックアップファイルも作られる）
```zsh
grep -l '置換対象の文字列' ./* | xargs sed -i.bak -e 's/置換対象の文字列/置換後の文字列/g'
```

```zsh
bundle exec rspec **/*.rb --format documentation
```
参考
https://qiita.com/ryouzi/items/de7336e6175530723b30