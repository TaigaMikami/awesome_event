FactoryGirl.define do
  factory :user do
    provider 'twitter'
    sequence(:uid) { |i| "uid#{i}"}
    sequence(:content) { |i| "nickname#{i}"}
    sequence(:image_url) { |i| "http://example.com/image#{i}.jpg"}
  end
end
