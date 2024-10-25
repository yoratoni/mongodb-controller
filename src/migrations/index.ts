import NTFPriceToNFTPrice, { info__NTFPriceToNFTPrice } from "migrations/NTFPriceToNFTPrice"
import getCounts, { info__getCounts } from "migrations/getCounts"
import licenceIdToLicenseId, { info__licenceIdToLicenseId } from "migrations/licenceIdToLicenseId"
import licencesToLicenses, { info__licencesToLicenses } from "migrations/licencesToLicenses"
import newRestrictedField, { info__newRestrictedField } from "migrations/newRestrictedField"
import sandbox, { info__sandbox } from "migrations/sandbox"
import txHashToTxHashes, { info__txHashToTxHashes } from "migrations/txHashToTxHashes"

import migrateAllProxies, { info__migrateAllProxies } from "migrations/migrateAllProxies"
import v1_0, { info__v1_0 } from "migrations/v1_0"
import template, { info__template } from "./template"

export {
	sandbox,
	info__sandbox,
	getCounts,
	info__getCounts,
	licenceIdToLicenseId,
	info__licenceIdToLicenseId,
	licencesToLicenses,
	info__licencesToLicenses,
	newRestrictedField,
	info__newRestrictedField,
	txHashToTxHashes,
	info__txHashToTxHashes,
	NTFPriceToNFTPrice,
	info__NTFPriceToNFTPrice,
	migrateAllProxies,
	info__migrateAllProxies,
	v1_0,
	info__v1_0,
	template,
	info__template,
}
