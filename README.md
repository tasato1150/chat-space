# README

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|chatname|string|null: false|

### Association
- has_many :messages
- has_many :users_groups
- has_many :users, through: :users_groups

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|username|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user