terraform {
  backend "pg" {
    workspaces {
      name = "ipfs-platform"
    }
  }
}

provider "kubernetes" {
}

module "go_api_deployment_vault_uploader" {
  source          = "github.com/blockchain-abstraction-middleware/deployment/modules/deployment"
  namespace       = "ipfs-platform"
  deployment_name = "vault-uploader"
  docker_image    = "bamdockerhub/vault-uploader"
  config_file     = "review.yml"
  config_path     = "/config/"
}