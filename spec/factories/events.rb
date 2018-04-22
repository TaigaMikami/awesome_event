FactoryBot.define do
  factory :event do
    owner
    ## 連番設定(sequence)
    sequence(:name) { |i| "イベント名#{i}"}
    sequence(:place) { |i| "イベント開催地#{i}"}
    sequence(:content) { |i| "イベント本文#{i}"}
    start_time { rand(1..30).days.from_now }
    end_time { start_time + rand(1..30).hours}
  end
end
