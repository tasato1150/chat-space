# README

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|chatname|string|null: false|

### Association
- has_many :messages
- has_many :users_groups
- has_many :users, through: :users_groups